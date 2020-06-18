class VideoQueue {
  /**
   * Queue 배열
   */
  arr: Array<string>;

  constructor(df: Array<string> = []) {
    this.arr = df;
  }

  addItem(str: string): void {
    this.arr.push(str);
  }

  takeOne(): string {
    const takeItem = this.arr.shift();
    if (takeItem === undefined) {
      console.log('더 이상 아이템이 존재하지 않습니다. 프로세스를 강제 종료합니다.');
      process.exit(1);
    } else {
      return takeItem;
    }
  }
}

export default VideoQueue;
