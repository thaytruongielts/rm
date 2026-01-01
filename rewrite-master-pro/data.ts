
import { Question } from './types';

export const questions: Question[] = [
  {
    id: 46,
    prompt: '"Remember to give Alan the card," Mary shouted at me.',
    keyword: 'REMINDED',
    hint: 'Mary reminded...',
    correctAnswers: ['Mary reminded me to give Alan the card.'],
    explanation: 'remind sb to do sth: nhắc nhở ai làm gì đó'
  },
  {
    id: 47,
    prompt: 'He locked the door to prevent the prisoner escaping.',
    keyword: 'SO THAT',
    hint: 'He locked...',
    correctAnswers: [
        'He locked the door so that the prisoner wouldn\'t escape.',
        'He locked the door so that the prisoner couldn\'t escape.'
    ],
    explanation: 'so that + a clause: để mà. Quá khứ dùng would/could/might + V.'
  },
  {
    id: 48,
    prompt: 'How long have you had your new car?',
    keyword: 'GET',
    hint: 'When did...',
    correctAnswers: ['When did you get your new car?'],
    explanation: 'How long (HTHT) chuyển sang When (QKĐ).'
  },
  {
    id: 49,
    prompt: 'Leave the shop or I will call the police.',
    keyword: 'UNLESS',
    hint: 'I\'ll call...',
    correctAnswers: ['I\'ll call the police unless you leave the shop.'],
    explanation: 'unless ~ if ... not: nếu ... không'
  },
  {
    id: 50,
    prompt: 'The Lord of Brecon built this castle in 1286.',
    keyword: 'BY',
    hint: 'This castle...',
    correctAnswers: ['This castle was built by the Lord of Brecon in 1286.'],
    explanation: 'Câu bị động thì quá khứ đơn: was/were + V3/ed.'
  },
  {
    id: 51,
    prompt: 'Our teachers never let us leave the school.',
    keyword: 'TO',
    hint: 'We were...',
    correctAnswers: ['We were not allowed to leave the school by our teachers.'],
    explanation: 'let sb do sth ~ be allowed to do sth.'
  },
  {
    id: 52,
    prompt: 'During the film on TV, the phone rang.',
    keyword: 'WAS',
    hint: 'While I...',
    correctAnswers: ['While I was watching the film, the phone rang.'],
    explanation: 'Thì quá khứ tiếp diễn diễn tả hành động đang xảy ra.'
  },
  {
    id: 53,
    prompt: 'Do you have any plans for next Wednesday evening?',
    keyword: 'DOING',
    hint: 'What are...',
    correctAnswers: ['What are you doing next Wednesday evening?'],
    explanation: 'Hiện tại tiếp diễn diễn tả kế hoạch tương lai.'
  },
  {
    id: 54,
    prompt: 'Please don\'t smoke in this room.',
    keyword: 'RATHER',
    hint: 'I\'d rather...',
    correctAnswers: ['I\'d rather you didn\'t smoke in this room.'],
    explanation: 'S + would rather + S + V2/ed: mong muốn ai đó làm gì.'
  },
  {
    id: 55,
    prompt: 'Everyone thinks that someone murdered Harry.',
    keyword: 'WAS',
    hint: 'It is...',
    correctAnswers: ['It is thought that Harry was murdered.'],
    explanation: 'Cấu trúc bị động khách quan: It is thought that...'
  },
  {
    id: 56,
    prompt: 'The weather was beautiful but we never went on the picnic.',
    keyword: 'OF',
    hint: 'We never...',
    correctAnswers: ['We never went on the picnic in spite of the beautiful weather.'],
    explanation: 'in spite of + N/V-ing: mặc dù.'
  },
  {
    id: 57,
    prompt: 'I am sure it will snow tomorrow.',
    keyword: 'BOUND',
    hint: 'It is...',
    correctAnswers: ['It is bound to snow tomorrow.'],
    explanation: 'be bound to V: chắc chắn làm điều gì.'
  },
  {
    id: 58,
    prompt: 'My car keys are possibly in the kitchen.',
    keyword: 'MIGHT',
    hint: 'My car...',
    correctAnswers: ['My car keys might be in the kitchen.'],
    explanation: 'might + V bare: có lẽ, có thể.'
  },
  {
    id: 59,
    prompt: 'Is it a problem if I open the window a little?',
    keyword: 'MIND',
    hint: 'Do you...',
    correctAnswers: ['Do you mind if I open the window a little?'],
    explanation: 'Do you mind if + S + V(present)?'
  },
  {
    id: 60,
    prompt: 'This car costs $10,000 and so does that one.',
    keyword: 'AS',
    hint: 'This car...',
    correctAnswers: [
        'This car costs as much as that one.',
        'This car is as expensive as that one.'
    ],
    explanation: 'So sánh bằng: as ... as.'
  },
  {
    id: 61,
    prompt: 'Kate is a teacher.',
    keyword: 'AS',
    hint: 'Kate works...',
    correctAnswers: ['Kate works as a teacher.'],
    explanation: 'work as + nghề nghiệp.'
  },
  {
    id: 62,
    prompt: 'I met your sister by chance at the airport last week.',
    keyword: 'RAN',
    hint: 'I ran...',
    correctAnswers: ['I ran into your sister at the airport last week.'],
    explanation: 'run into ~ meet by chance: tình cờ gặp.'
  },
  {
    id: 63,
    prompt: 'The doctor told me to give up smoking.',
    keyword: 'STOP',
    hint: 'The doctor...',
    correctAnswers: ['The doctor told me to stop smoking.'],
    explanation: 'stop ~ give up: từ bỏ.'
  },
  {
    id: 64,
    prompt: 'It wasn\'t obligatory to go to work today. I thought it was!',
    keyword: 'NEED',
    hint: 'I need...',
    correctAnswers: ['I need not have gone to work today.'],
    explanation: 'needn\'t have V3/ed: lẽ ra đã không cần làm gì.'
  },
  {
    id: 65,
    prompt: 'It was a mistake of you to lose your passport.',
    keyword: 'LOST',
    hint: 'You shouldn\'t...',
    correctAnswers: ['You shouldn\'t have lost your passport.'],
    explanation: 'should not have V3/ed: lẽ ra không nên làm gì.'
  },
  {
    id: 66,
    prompt: 'Why don\'t we leave after breakfast on Saturday?',
    keyword: 'LEAVING',
    hint: 'How about...',
    correctAnswers: ['How about leaving after breakfast on Saturday?'],
    explanation: 'How about + V-ing: đưa ra lời đề nghị.'
  },
  {
    id: 67,
    prompt: 'This is the most boring film I have ever seen!',
    keyword: 'MORE',
    hint: 'I have...',
    correctAnswers: ['I have never seen a more boring film.'],
    explanation: 'So sánh nhất chuyển sang so sánh hơn ở thể phủ định.'
  },
  {
    id: 68,
    prompt: 'We will have to leave early tomorrow.',
    keyword: 'SET',
    hint: 'We will...',
    correctAnswers: ['We will have to set off early tomorrow.'],
    explanation: 'set off: khởi hành.'
  },
  {
    id: 69,
    prompt: 'I told them not to cross the park at night.',
    keyword: 'WARNED',
    hint: 'I warned...',
    correctAnswers: [
        'I warned them not to cross the park at night.',
        'I warned them about crossing the park at night.',
        'I warned them against crossing the park at night.'
    ],
    explanation: 'warn sb not to do sth / warn sb against V-ing.'
  }
];
