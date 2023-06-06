const checkAnswer = require("../javascripts/models/submit-question");

// Mock req and res objects
const req = {
  session: {
    data: {
      'question-one': 'Perceptible Information',
      'question-two': [
        'Providing alternative text for images',
        'Ensuring keyboard accessibility',
        'Implementing responsive design for mobile devices'
      ]
    }
  }
};

const res = {
  redirect: jest.fn()
};

describe("checkAnswer", () => {
  afterEach(() => {
    // Reset the mock function
    res.redirect.mockClear();
  });

  it("should redirect to /question-two when the answer is correct (question-one)", () => {
    const correctOption = 'Perceptible Information';
    const page = "/question-two";

    checkAnswer(req, res, 'question-one', correctOption, page);

    // Expect redirect to /question-two
    expect(res.redirect).toHaveBeenCalledWith("/question-two");
  });

  it("should redirect to /game-over when the answer is incorrect (question-one)", () => {
    const incorrectOption = 'Incorrect Option';
    const page = "/question-two";

    checkAnswer(req, res, 'question-one', incorrectOption, page);

    // Expect redirect to /game-over
    expect(res.redirect).toHaveBeenCalledWith("/game-over");
  });

  it("should redirect to /question-three when the answer is correct (question-two)", () => {
    const correctOption = [
      'Providing alternative text for images',
      'Ensuring keyboard accessibility',
      'Implementing responsive design for mobile devices'
    ];
    const page = "/question-three";

    checkAnswer(req, res, 'question-two', correctOption, page);

    // Expect redirect to /question-three
    expect(res.redirect).toHaveBeenCalledWith("/question-three");
  });

  it("should redirect to /game-over when the answer is incorrect (question-two)", () => {
    const incorrectOption = [
      'Incorrect Option 1',
      'Incorrect Option 2',
      'Incorrect Option 3'
    ];
    const page = "/question-three";

    checkAnswer(req, res, 'question-two', incorrectOption, page);

    // Expect redirect to /game-over
    expect(res.redirect).toHaveBeenCalledWith("/game-over");
  });
});
