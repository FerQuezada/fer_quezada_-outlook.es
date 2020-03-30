import { Selector, t } from "testcafe";

export default class ExamplePage {
  constructor() {
    this.inputName = Selector("#developer-name");
    this.firstCheckBox = Selector("input[name=remote]");
    this.secondCheckBox = Selector("input[name=re-using]");
    this.thirdCheckBox = Selector("input[name=background]");
    this.sixthCheckBox = Selector("input[id=windows]");
    this.triedTestCafe = Selector("#tried-test-cafe");
    this.comments = Selector("#comments");
    this.submitButton = Selector("#submit-button");
  }
}