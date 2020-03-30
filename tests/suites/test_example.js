//
//testcafe chrome tests/suites/

import ExamplePage from "../page_model/example_model";

const page = new ExamplePage();

fixture `Getting Started`
    .page `http://devexpress.github.io/testcafe/example`;

test("input name", async t => {
    const name = 'Fernando';
  await t
    .typeText(page.inputName, name)
    .click(page.firstCheckBox)
    .click(page.secondCheckBox)
    .click(page.thirdCheckBox)
    .click(page.sixthCheckBox)
    .click(page.triedTestCafe)
    
    .typeText(
      page.comments,
      "REALIZANDO UN COMENTARIO CON TESTCAFE"
    )
    .click(page.submitButton)
    .wait(6000);
});


