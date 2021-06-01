import * as CryptoJS from "crypto-js";

class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  // 메소드가 Block클래스 안에 있어야함. BLock안에서 언제나 호출할 수 있는 메소드.
  //하지만 우리는 블록 생성 안해도 사용가능한 method를 만들고싶음.
  //static 메소드 쓰면 클래스 밖에서도 쓸수있음.
  static calculateBlockHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: string
  ): string => {
    return CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
  };

  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

//Block.calculateBlockHash();

const genesisBlock: Block = new Block(0, "238793232", "", "Hello", 123456);

let blockchain: Block[] = [genesisBlock];

//blockchain에 stuff를 push하수없음을 알게됨(type script의 장점.)
//blockchain.push("stuff");

console.log(blockchain);
const getBlockchain = (): Block[] => blockchain;

const getLatesBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

export {};
