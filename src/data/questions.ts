import type { Question } from '../types/quiz';

export const questions: Question[] = [
  {
    id: 1,
    text: 'Какое число отмечается как Праздник весны и труда в России?',
    options: [
      { letter: 'А', text: '1 марта' },
      { letter: 'Б', text: '1 мая' },
      { letter: 'В', text: '9 мая' },
      { letter: 'Г', text: '12 июня' },
    ],
    correctAnswer: 'Б',
    icon: 'calendar',
  },
  {
    id: 2,
    text: 'В каком году 1 мая был объявлен выходным днём?',
    options: [
      { letter: 'А', text: '1890' },
      { letter: 'Б', text: '1917' },
      { letter: 'В', text: '1889' },
      { letter: 'Г', text: '1905' },
    ],
    correctAnswer: 'В',
    icon: 'clock',
  },
  {
    id: 3,
    text: 'Какой цвет считается главным символом Первомая?',
    options: [
      { letter: 'А', text: 'Красный' },
      { letter: 'Б', text: 'Зелёный' },
      { letter: 'В', text: 'Жёлтый' },
      { letter: 'Г', text: 'Синий' },
    ],
    correctAnswer: 'А',
    icon: 'palette',
  },
  {
    id: 4,
    text: 'Как назывались традиционные шествия и демонстрации 1 мая в советское время?',
    options: [
      { letter: 'А', text: 'Парад победы' },
      { letter: 'Б', text: 'Демонстрация трудящихся' },
      { letter: 'В', text: 'Первомайская колонна' },
      { letter: 'Г', text: 'Марш единства' },
    ],
    correctAnswer: 'Б',
    icon: 'users',
  },
  {
    id: 5,
    text: 'Какой лозунг ассоциируется с 1 мая?',
    options: [
      { letter: 'А', text: 'Свобода, равенство, братство' },
      { letter: 'Б', text: 'Мир, труд, май' },
      { letter: 'В', text: 'Пролетарии всех стран, соединяйтесь!' },
      { letter: 'Г', text: 'Власть — народу' },
    ],
    correctAnswer: 'Б',
    icon: 'megaphone',
  },
];