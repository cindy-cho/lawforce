import React from 'react';
import { View, StyleSheet, StatusBar, Text, SafeAreaView, Dimensions } from 'react-native';
import { Button, ButtonContainer } from '../components/Button';
import { Alert } from '../components/Alert';

class Quiz extends React.Component {
  state = {
    questionCount: 1,
    correctCount: 0,
    totalCount: this.props.navigation.getParam('questions', []).length,
    activeQuestionIndex: 0,
    answered: false,
    answerCorrect: false
  };

  answer = correct => {
    this.setState(
      state => {
        const nextState = { answered: true };

        if (correct) {
          nextState.correctCount = state.correctCount + 1;
          nextState.answerCorrect = true;
        } else {
          nextState.answerCorrect = false;
        }
        nextState.questionCount = state.questionCount + 1;

        return nextState;
      },
      () => {
        setTimeout(() => this.nextQuestion(), 750);
      }
    );
  };

  nextQuestion = () => {
    this.setState(
      state => {
        const nextIndex = state.activeQuestionIndex + 1;

        if(nextIndex >= state.totalCount) {
          return this.props.navigation.popToTop();
        }

        return {
          activeQuestionIndex: nextIndex,
          answered: false
        };
      });
  };

  render() {
    const questions = this.props.navigation.getParam('questions', []);
    const question = questions[this.state.activeQuestionIndex];

    return(
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />
        <SafeAreaView style={styles.safeArea}>
          <View>
            <Text style={styles.text}>{question.question}</Text>
            <View style={styles.HLine}></View>

            <View style={styles.Qbox}>
              <Text style={styles.Q}>Q{`${this.state.questionCount}`}</Text>
            </View>
            <ButtonContainer>
              {question.answers.map(answer => (
                <Button
                  key={answer.id}
                  index={answer.index}
                  text={answer.text}
                  onPress={() => this.answer(answer.correct)}
                />
              ))}
            </ButtonContainer>
          </View>
          <View style={[styles.HLine, {position:'absolute', bottom: 50}]}></View>
          <View style={styles.btm}>
            <Text style={styles.time}>02:40</Text>
            <Text style={styles.next}>채점하기</Text>
          </View>
        </SafeAreaView>
        <Alert
          correct={this.state.answerCorrect}
          visible={this.state.answered}
        />
      </View>
    );
  }
}

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex : 1,
    paddingHorizontal: 25,
    backgroundColor: '#fff'
  },
  text: {
    fontSize: 14,
    lineHeight: 25,
  },
  safeArea: {
    flex: 1,
    marginTop: 35,
    justifyContent: 'space-between'
  },
  HLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    paddingTop : 55,
    left: -25,
    width: screen.width,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  Q: {
    fontSize: 18,
    fontWeight: '500',
  },
  Qbox: {
    borderBottomWidth: 3,
    borderBottomColor: 'black',
    paddingVertical: 18,
    paddingHorizontal: 5,
    alignSelf: 'flex-start'
  },
  btm: {
    flexDirection: 'row',
    flex: 1,
    height: 50,
    width: screen.width,
    position: 'absolute',
    bottom: 0,
    left: -25,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25
  },
  time: {
    fontSize: 17,
    fontWeight: '500'
  },
  next: {
    fontSize: 17,
    fontWeight: '500',
    color: '#A5A5A5'
  }
})

export default Quiz;