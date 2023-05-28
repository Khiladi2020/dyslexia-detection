const TEST_STORY = {
  details: {
    name: "Story",
    next_test: '/report',
    voice_message: "You will shown a series of images and at the end questions will be based on the story."
  },
  stories: [
    {
      details: {
        name: "Hide and Seek",
      },
      pictures: [
        {
          id: "a1",
          image: require("../assets/story/hs1.png"),
        },
        {
          id: "a1",
          image: require("../assets/story/hs2.png"),
        },
        {
          id: "a1",
          image: require("../assets/story/hs3.png"),
        },
        {
          id: "a1",
          image: require("../assets/story/hs4.png"),
        },
        {
          id: "a1",
          image: require("../assets/story/hs5.png"),
        },
        {
          id: "a1",
          image: require("../assets/story/hs6.png"),
        },
        {
          id: "a1",
          image: require("../assets/story/hs7.png"),
        },
        {
          id: "a1",
          image: require("../assets/story/hs8.png"),
        },
        {
          id: "a1",
          image: require("../assets/story/hs9.png"),
        },
        {
          id: "a1",
          image: require("../assets/story/hs10.png"),
        },
        {
          id: "a1",
          image: require("../assets/story/hs12.png"),
        },
        {
          id: "a1",
          image: require("../assets/story/hs13.png"),
        },
        {
          id: "a1",
          image: require("../assets/story/hs14.png"),
        },
        {
          id: "a1",
          image: require("../assets/story/hs15.png"),
        },
        {
          id: "a1",
          image: require("../assets/story/hs16.png"),
        },
        {
          id: "a1",
          image: require("../assets/story/hs17.png"),
        },
        {
          id: "a1",
          image: require("../assets/story/hs18.png"),
        },
      ],
      questions: [
        {
          title: "Who was seeking in the story",
          options: [
            { answerText: "Jeet", isCorrect: true },
            { answerText: "Babli", isCorrect: false },
            { answerText: "Mohit", isCorrect: false },
            { answerText: "Uma", isCorrect: false },
          ],
          correctAns: "Jeet",
          type: "options",
          remark: "Difficulty in remenbering or short term memory",
        },
        {
          title: "Write the name of child who was found first.",
          correctAns: "Mohit",
          type: "voice",
          remark: "Difficulty in understanding voice questions",
        },
        {
          title: "Where was Meeta hiding",
          options: [
            { answerText: "Behind dadi", isCorrect: true },
            { answerText: "courtyard", isCorrect: false },
            { answerText: "On tree", isCorrect: false },
            { answerText: "under bed", isCorrect: false },
          ],
          correctAns: "Behind dadi",
          type: "options",
          remark: "Scope for improvement in short term rememberence",
        },
        {
          title: "Choose correct image of Naziya.",
          options: [
            { name: "Uma", image: require("../assets/story/qhs1.png"), isCorrect: false },
            { name: "Meeta", image: require("../assets/story/qhs2.png"), isCorrect: false },
            { name: "Naziya", image: require("../assets/story/qhs3.png"), isCorrect: true },
          ],
          correctAns: "Naziya",
          type: "options_image",
          remark: "Difficulty in visual retention",
        },
      ],
    },
  ],
};

export default TEST_STORY;
