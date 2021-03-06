export const SUPPLY_ITEM = 'supply';
export const SELECT_ITEM = 'select';

export const items = [
  {
    code : `
  def greet(name):
      return f"hi there, {name}"
  
  greet("Sue")`,
    answer : 'hi there, Sue',
    type: SUPPLY_ITEM,
  },
  {
    code : `
  def too_high(number):
      if number >= 100:
          return "that's too high"
      else:
          return "what a nice number"
  
  too_high(55)`,
    answer : 'what a nice number',
    type: SUPPLY_ITEM,
  },
  {
    code : `
  def multiply(number):
      return number * 2
  
  multiply(10)`,
    answer : '20',
    type: SELECT_ITEM,
    selections: [
      { answer: '20', correct: true },
      { answer: '2', correct: false },
      { answer: 'numbernumber', correct: false },
      { answer: '10', correct: false },
    ],
  },
  {
    code : `
  def reverse(string):
      reversed = []
      for i in range(len(string)):
          reversed.insert(0, string[i])
      return ''.join(reversed)
  
  reverse("correct order")`,
    answer : 'redro tcerroc',
    type: SUPPLY_ITEM,
  },
  {
    code : `
  def gimme_evens(numbers):
      return [number for number in numbers if number % 2 == 0]
  
  multiply([1,2,3,4,5,6])`,
    answer : '[2,4,6]',
    type: SELECT_ITEM,
    selections: [
      { answer: '[2,4,6]', correct: true },
      { answer: '[1,2,3,4,5,6]', correct: false },
      { answer: '[2]', correct: false },
      { answer: '[numbers]', correct: false },
    ],
  }
]
