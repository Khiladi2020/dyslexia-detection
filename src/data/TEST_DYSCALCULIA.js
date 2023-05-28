import problem11 from 'src/assets/problem11.png';
import problem13 from 'src/assets/problem13.png';
import problem14 from 'src/assets/problem14.png';
import problem15 from 'src/assets/problem15.png';
import problem16 from 'src/assets/problem16.png';
import problem17 from 'src/assets/problem17.png';
import problem18 from 'src/assets/problem18.png';
import problem19 from 'src/assets/problem19.png';
import problem21 from 'src/assets/problem21.png';
import problem22 from 'src/assets/problem22.png';
import problem12 from 'src/assets/problem12.png';
import problem23 from 'src/assets/problem23.png';

const TYPES = {
  'TYPE1' : {
    category : 'Basic Calculations',
    count : 5,
  },
  'TYPE2' : {
    category : 'Remembering Facts',
    count : 5,
  },
  'TYPE3' : {
    category : 'Fraction',
    count : 5,
  },
  'TYPE4' : {
    category : 'Counting',
    count : 5,
  },
  'TYPE5' : {
    category : 'Shapes',
    count : 5,
  },
};

const TEST_DYSCALCULIA = {
  details: {
    name: 'Dyscalculia',
    next_test: '/test/reaction',
    voice_message: "Read the questions and answer carefully, questions will be based on mathematics."
  },

  questions: [
    {
      id: 16,
      questionText: 'How many dots do you see ?',
      questionImage: problem16,
      questionType: 'TYPE4',
      answerOptions: [
        { answerText: '2', isCorrect: false },
        { answerText: '1', isCorrect: false },
        { answerText: '5', isCorrect: false },
        { answerText: '4', isCorrect: true },
      ],
    },

    {
      id: 17,
      questionText: 'How many dolls are there ?',
      questionImage: problem17,
      questionType: 'TYPE4',
      answerOptions: [
        { answerText: '2', isCorrect: false },
        { answerText: '1', isCorrect: false },
        { answerText: '3', isCorrect: true },
        { answerText: '4', isCorrect: false },
      ],
    },

    {
      id: 18,
      questionText: 'Count the apples.',
      questionImage: problem18,
      questionType: 'TYPE4',
      answerOptions: [
        { answerText: '7', isCorrect: true },
        { answerText: '1', isCorrect: false },
        { answerText: '5', isCorrect: false },
        { answerText: '4', isCorrect: false },
      ],
    },
    {
      id: 21,
      questionText: 'Which is a Square ?',
      questionImage: problem21,
      questionType: 'TYPE5',
      answerOptions: [
        { answerText: '2', isCorrect: false },
        { answerText: '1', isCorrect: true },
      ],
    },

    {
      id: 22,
      questionText: 'Which is an acute angle ?',
      questionImage: problem22,
      questionType: 'TYPE5',
      answerOptions: [
        { answerText: 'B', isCorrect: false },
        { answerText: 'A', isCorrect: true },
        { answerText: 'C', isCorrect: false },
      ],
    },

    {
      id: 23,
      questionText: 'Which is a Triangle ?',
      questionImage: problem23,
      questionType: 'TYPE5',
      answerOptions: [
        { answerText: 'A', isCorrect: false },
        { answerText: 'B', isCorrect: true },
      ],
    },

    {
      id: 24,
      questionText: 'Which is an obtuse angle ?',
      questionImage: problem22,
      questionType: 'TYPE5',
      answerOptions: [
        { answerText: 'B', isCorrect: false },
        { answerText: 'A', isCorrect: false },
        { answerText: 'C', isCorrect: true },
      ],
    },

    {
      id: 25,
      questionText: 'Which is a Circle ?',
      questionImage: problem23,
      questionType: 'TYPE5',
      answerOptions: [
        { answerText: 'B', isCorrect: false },
        { answerText: 'A', isCorrect: true },
      ],
    },
    {
      id: 19,
      questionText: 'Which picture shows 7 + 1 = 8 ?',
      questionImage: problem19,
      questionType: 'TYPE4',
      answerOptions: [
        { answerText: 'A', isCorrect: true },
        { answerText: 'B', isCorrect: false },
      ],
    },

    {
      id: 20,
      questionText: 'How many fingers do you have ?',
      questionImage: '',
      questionType: 'TYPE4',
      answerOptions: [
        { answerText: '5', isCorrect: false },
        { answerText: '10', isCorrect: true },
        { answerText: '2', isCorrect: false },
        { answerText: '6', isCorrect: false },
      ],
    },

    {
      id: 11,
      questionText: 'What is the sum ?',
      questionImage: problem11,
      questionType: 'TYPE3',
      answerOptions: [
        { answerText: '1', isCorrect: true },
        { answerText: '3/4', isCorrect: false },
        { answerText: '1/4', isCorrect: false },
        { answerText: '1/2', isCorrect: false },
      ],
    },

    {
      id: 12,
      questionText: 'How can you write it in fraction ?',
      questionImage: problem12,
      questionType: 'TYPE3',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '1/3', isCorrect: true },
        { answerText: '1/4', isCorrect: false },
        { answerText: '1/2', isCorrect: false },
      ],
    },

    {
      id: 13,
      questionText: 'What is the difference ?',
      questionImage: problem13,
      questionType: 'TYPE3',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '3/4', isCorrect: false },
        { answerText: '1/4', isCorrect: false },
        { answerText: '4/8', isCorrect: true },
      ],
    },

    {
      id: 14,
      questionText: 'What is the product ?',
      questionImage: problem14,
      questionType: 'TYPE3',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '3/4', isCorrect: false },
        { answerText: '14/24', isCorrect: true },
        { answerText: '1/2', isCorrect: false },
      ],
    },

    {
      id: 15,
      questionText: 'How much portion is colored ?',
      questionImage: problem15,
      questionType: 'TYPE3',
      answerOptions: [
        { answerText: '2/3', isCorrect: false },
        { answerText: '3/4', isCorrect: false },
        { answerText: '2/5', isCorrect: false },
        { answerText: '2/6', isCorrect: true },
      ],
    },
    {
      id: 6,
      questionText: 'Which number comes after 8 ?',
      questionType: 'TYPE2',
      answerOptions: [
        { answerText: '7', isCorrect: false },
        { answerText: '9', isCorrect: true },
        { answerText: '6', isCorrect: false },
        { answerText: '8', isCorrect: false },
      ],
    },

    {
      id: 7,
      questionText: 'What comes after Thursday ?',
      questionType: 'TYPE2',
      answerOptions: [
        { answerText: 'Saturday', isCorrect: false },
        { answerText: 'Monday', isCorrect: false },
        { answerText: 'Friday', isCorrect: true },
        { answerText: 'Tuesday', isCorrect: false },
      ],
    },

    {
      id: 8,
      questionText: 'What comes before June ?',
      questionType: 'TYPE2',
      answerOptions: [
        { answerText: 'July', isCorrect: false },
        { answerText: 'May', isCorrect: true },
        { answerText: 'December', isCorrect: false },
        { answerText: 'January', isCorrect: false },
      ],
    },
    
    {
      id: 9,
      questionText: 'How many apples are there in 1 Dozen ?',
      questionType: 'TYPE2',
      answerOptions: [
        { answerText: '2', isCorrect: false },
        { answerText: '12', isCorrect: true },
        { answerText: '8', isCorrect: false },
        { answerText: '20', isCorrect: false },
      ],
    },

    {
      id: 10,
      questionText: 'How many days are there in a week ?',
      questionType: 'TYPE2',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '3', isCorrect: false },
        { answerText: '7', isCorrect: true },
        { answerText: '14', isCorrect: false },
      ],
    },
    {
      id: 1,
      questionText: '4 + 2 = ?',
      questionType: 'TYPE1',
      answerOptions: [
        { answerText: '7', isCorrect: false },
        { answerText: '6', isCorrect: true },
        { answerText: '10', isCorrect: false },
        { answerText: '8', isCorrect: false },
      ],
    },

    {
      id: 2,
      questionText: '5 x 4 = ?',
      questionType: 'TYPE1',
      answerOptions: [
        { answerText: '10', isCorrect: false },
        { answerText: '9', isCorrect: false },
        { answerText: '11', isCorrect: false },
        { answerText: '20', isCorrect: true },
      ],
    },

    {
      id: 3,
      questionText: '6 - 5 = ?',
      questionType: 'TYPE1',
      answerOptions: [
        { answerText: '1', isCorrect: true },
        { answerText: '12', isCorrect: false },
        { answerText: '15', isCorrect: false },
        { answerText: '7', isCorrect: false },
      ],
    },

    {
      id: 4,
      questionText: '4 / 2 = ?',
      questionType: 'TYPE1',
      answerOptions: [
        { answerText: '17', isCorrect: false },
        { answerText: '1', isCorrect: false },
        { answerText: '0', isCorrect: false },
        { answerText: '2', isCorrect: true },
      ],
    },

    {
      id: 5,
      questionText: '5 - 6 = ?',
      questionType: 'TYPE1',
      answerOptions: [
        { answerText: '-1', isCorrect: true },
        { answerText: '1', isCorrect: false },
        { answerText: '0', isCorrect: false },
        { answerText: '2', isCorrect: false },
      ],
    }
  ]
};

export{
  TEST_DYSCALCULIA,
  TYPES,
}