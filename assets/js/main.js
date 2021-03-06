const StageApp = Vue.createApp({
  data() {
    return {
      /* 送信ボタン上下に表示されるメッセージ */
      okMessage: '犯人のアジトを突き止めた！',
      okMessage2:'転校生の居場所を突き止めた！',
      okMessage3:'転校生を助け出した！',
      ngMessage: 'この場所は犯人のアジトではないようだ。',
      ngMessage2: 'この場所は転校生の居場所ではないようだ',
      ngMessage3: 'この番号は違うようだ',
      /* 解答 */
      stage1CorrectAnswer: 'セントラルビル',
      stage2CorrectAnswer: 'エクストラビル',
      stage3CorrectAnswer: '16165'||'１１１１',
      /* stage1 */
      stage1Answer: false, // 正解かどうか
      stage1: '',          // インプットエリアの入力の値
      stage1Message: '',   // 送信ボタン上下に表示されるメッセージ
      stage1Clear: false,  // ステージクリア
      /* stage2 */
      stage2Answer: false, // 正解かどうか
      stage2: '',          // インプットエリアの入力の値
      stage2Message: '',  // 送信ボタン上下に表示されるメッセージ
      stage2Clear: false,  // ステージクリア
      /* stage3 */
      stage3Answer: false, // 正解かどうか
      stage3: '',        // インプットエリアの入力の値
      stage3Message: '',  // 送信ボタン上下に表示されるメッセージ
      stage3Clear: false, // ステージクリア
    }
  },
  methods: {
    /* stage1の入力を判定します */
    stage1AnswerInput(stage1) {
      if(stage1 === this.stage1CorrectAnswer) {
        this.stage1Answer = true;
        this.stage1Message = this.okMessage;
      } else {
        this.stage1Answer = false;
        this.stage1Message = this.ngMessage; 
      }
    },
    /* stage1のクリア画面の動作を設定します */
    stage1NextStage() {
      this.stage1Answer = false;
      this.stage1Clear = true;
    },
    /* stage2の入力を判定します */
    stage2AnswerInput(stage2) {
      if(stage2 === this.stage2CorrectAnswer) {
        this.stage2Answer = true;
        this.stage2Message = this.okMessage2;
      } else {
        this.stage2Answer = false;
        this.stage2Message = this.ngMessage2;
      }
    },
    /* stage2のクリア画面の動作を設定します */
    stage2NextStage() {
      this.stage2Answer = false;
      this.stage2Clear = true;
    },
    /* stage3の入力を判定します */
    stage3AnswerInput(stage3) {
      if(stage3 === this.stage3CorrectAnswer
        ) {
        this.stage3Answer = true;
        this.stage3Message = this.okMessage3;
        window.location.href = 'final.html';
      } else {
        this.stage3Answer = false;
        this.stage3Message = this.ngMessage3;
      }
    },
  }
}).mount('#stage')
