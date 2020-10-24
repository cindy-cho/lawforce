const questions = [
  {
    question: "What is localhost's IP address?",
    answers: [
      { index: 'A', id: "1", text: "192.168.1.1" },
      { index: 'B', id: "2", text: "127.0.0.1", correct: true },
      { index: 'C', id: "3", text: "209.85.231.104" },
      { index: 'D', id: "4", text: "66.220.149.25" }
    ]
  },
  {
    question: "What kind of fruit was used to name a computer in 1984?",
    answers: [
      { index: 'A', id: "1", text: "Blackberry" },
      { index: 'B', id: "2", text: "Blueberry" },
      { index: 'C', id: "3", text: "Pear" },
      { index: 'D', id: "4", text: "Apple", correct: true }
    ]
  }
];

export default questions;