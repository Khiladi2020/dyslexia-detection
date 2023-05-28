const TEST_REACTION = {
  details: {
    name: 'Reaction',
    next_test: '/test/story',
    voice_message: "Observe the question image and select the same in answer image. Faster you answer the more you score"
  },

  questions: [
    {
      id: 1,
      questionText: 'See the image carefully',
      questionImage: require('../assets/reaction/bananas.avif'),
      questionType: 'image',
      questionDisplayTime: 3,
      answerOptions: [
        { answerData: require('../assets/reaction/bananas.avif'), answerType:'image', isCorrect: true },
        { answerData: require('../assets/reaction/apple.avif'), answerType:'image', isCorrect: false },
        { answerData: require('../assets/reaction/mango.avif'), answerType:'image', isCorrect: false },
        { answerData: require('../assets/reaction/pineapple.avif'), answerType:'image', isCorrect: false },
      ],
    },
    {
      id: 10,
      questionText: 'See the image carefully',
      questionImage: require('../assets/reaction/number3.jpeg'),
      questionType: 'image',
      questionDisplayTime: 3,
      answerOptions: [
        { answerData: require('../assets/reaction/number4.jpeg'), answerType:'image', isCorrect: false },
        { answerData: require('../assets/reaction/number1.jpeg'), answerType:'image', isCorrect: false },
        { answerData: require('../assets/reaction/number2.jpeg'), answerType:'image', isCorrect: false },
        { answerData: require('../assets/reaction/number3.jpeg'), answerType:'image', isCorrect: true },
      ],
    },
    {
      id: 2,
      questionText: 'See the image carefully',
      questionImage: require('../assets/reaction/apple.avif'),
      questionType: 'image',
      questionDisplayTime: 3,
      answerOptions: [
        { answerData: require('../assets/reaction/mango.avif'), answerType:'image', isCorrect: false },
        { answerData: require('../assets/reaction/bananas.avif'), answerType:'image', isCorrect: false },
        { answerData: require('../assets/reaction/pineapple.avif'), answerType:'image', isCorrect: false },
        { answerData: require('../assets/reaction/apple.avif'), answerType:'image', isCorrect: true },
      ],
    },
    {
      id: 3,
      questionText: 'See +2++2',
      questionImage: require('../assets/reaction/apple.avif'),
      questionType: 'text',
      questionDisplayTime: 3,
      answerOptions: [
        { answerData: "2++2+", answerType:'text', isCorrect: false },
        { answerData: "+2+2", answerType:'text', isCorrect: false },
        { answerData: "2+2", answerType:'text', isCorrect: false },
        { answerData: "+2++2", answerType:'text', isCorrect: true },
      ],
    },
    {
      id: 7,
      questionText: 'See the image carefully',
      questionImage: require('../assets/reaction/number2.jpeg'),
      questionType: 'image',
      questionDisplayTime: 3,
      answerOptions: [
        { answerData: require('../assets/reaction/number4.jpeg'), answerType:'image', isCorrect: false },
        { answerData: require('../assets/reaction/number1.jpeg'), answerType:'image', isCorrect: false },
        { answerData: require('../assets/reaction/number2.jpeg'), answerType:'image', isCorrect: true },
        { answerData: require('../assets/reaction/number3.jpeg'), answerType:'image', isCorrect: false },
      ],
    },
    {
      id: 4,
      questionText: 'See the image carefully',
      questionImage: require('../assets/reaction/pencils1.jpeg'),
      questionType: 'image',
      questionDisplayTime: 3,
      answerOptions: [
        { answerData: require('../assets/reaction/pencils1.jpeg'), answerType:'image', isCorrect: true },
        { answerData: require('../assets/reaction/pencils3.jpeg'), answerType:'image', isCorrect: false },
        { answerData: require('../assets/reaction/pencils4.jpeg'), answerType:'image', isCorrect: false },
        { answerData: require('../assets/reaction/pencils2.jpeg'), answerType:'image', isCorrect: false },
      ],
    },
    {
      id: 5,
      questionText: 'See the image carefully',
      questionImage: require('../assets/reaction/pen_book1.jpeg'),
      questionType: 'image',
      questionDisplayTime: 3,
      answerOptions: [
        { answerData: require('../assets/reaction/pen_book2.jpeg'), answerType:'image', isCorrect: false },
        { answerData: require('../assets/reaction/pen_book3.jpeg'), answerType:'image', isCorrect: false },
        { answerData: require('../assets/reaction/pen_book1.jpeg'), answerType:'image', isCorrect: true },
        { answerData: require('../assets/reaction/pen_book2.jpeg'), answerType:'image', isCorrect: false },
      ],
    },
    {
      id: 8,
      questionText: 'See the image carefully',
      questionImage: require('../assets/reaction/letter3.jpeg'),
      questionType: 'image',
      questionDisplayTime: 3,
      answerOptions: [
        { answerData: require('../assets/reaction/letter4.jpeg'), answerType:'image', isCorrect: false },
        { answerData: require('../assets/reaction/letter3.jpeg'), answerType:'image', isCorrect: true },
        { answerData: require('../assets/reaction/letter2.jpeg'), answerType:'image', isCorrect: false },
        { answerData: require('../assets/reaction/letter1.jpeg'), answerType:'image', isCorrect: false },
      ],
    },
    {
      id: 6,
      questionText: 'See the image carefully',
      questionImage: require('../assets/reaction/bheem1.jpeg'),
      questionType: 'image',
      questionDisplayTime: 3,
      answerOptions: [
        { answerData: require('../assets/reaction/bheem2.jpeg'), answerType:'image', isCorrect: false },
        { answerData: require('../assets/reaction/bheem3.jpeg'), answerType:'image', isCorrect: false },
        { answerData: require('../assets/reaction/bheem1.jpeg'), answerType:'image', isCorrect: true },
        { answerData: require('../assets/reaction/bheem4.jpeg'), answerType:'image', isCorrect: false },
      ],
    },
    {
      id: 9,
      questionText: 'See the image carefully',
      questionImage: require('../assets/reaction/letter4.jpeg'),
      questionType: 'image',
      questionDisplayTime: 3,
      answerOptions: [
        { answerData: require('../assets/reaction/letter4.jpeg'), answerType:'image', isCorrect: true },
        { answerData: require('../assets/reaction/letter3.jpeg'), answerType:'image', isCorrect: false },
        { answerData: require('../assets/reaction/letter2.jpeg'), answerType:'image', isCorrect: false },
        { answerData: require('../assets/reaction/letter1.jpeg'), answerType:'image', isCorrect: false },
      ],
    },
  ]
};

export default TEST_REACTION