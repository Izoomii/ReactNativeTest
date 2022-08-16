import { StyleSheet, View, Text, TouchableOpacity, Button } from "react-native";
import Header from "../components/Header/Header";
import { Answer, data } from "../../config/data";
import { useState } from "react";
import { blue, purple } from "../../utils/colors";
import AnswerChoice from "../components/AnswerChoice/AnswerChoice";
import SmallBox from "../components/SmallBox/SmallBox";
import { useQuestionModal } from "../../store/global/modal";

export default function Landing() {
  //   const [questionIndex, setQuestionIndex] = useState(0);
  const questionIndex = useQuestionModal((state) => state.currentQuestionIndex);
  const setQuestionIndex = useQuestionModal(
    (state) => state.setCurrentQuestionIndex
  );
  const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);
  const [score, setScore] = useState(0);

  const showingResults = useQuestionModal((state) => state.showingResults);
  const setShowingResults = useQuestionModal(
    (state) => state.setShowingResults
  );

  const pressMainButton = () => {
    addScore();
    goToNextQuestion();
  };

  const addScore = () => {
    if (selectedAnswer && selectedAnswer.correct === true) {
      setScore((prev) => prev + 5);
    }
    setSelectedAnswer(null);
  };

  const goToNextQuestion = () => {
    if (questionIndex < data.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      //this here is where result is shown
      setShowingResults(true);
    }
  };

  const selectAnswer = (elem: Answer) => {
    setSelectedAnswer(elem);
  };

  const reset = () => {
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowingResults(false);
  };

  return (
    <View style={styles.landing}>
      <Header />
      {showingResults ? (
        <View style={[styles.body, styles.center]}>
          <Text style={{ fontWeight: "bold" }}>Félicitaion !</Text>
          <Text>Voici votre Score</Text>
          <SmallBox text={`${score}/20`} textColor={purple} />
          <TouchableOpacity
            onPress={() => reset()}
            style={{
              marginVertical: 5,
              borderRadius: 100,
              backgroundColor: blue,
              paddingHorizontal: 15,
              paddingVertical: 8,
            }}
          >
            <Text style={{ color: "white", fontSize: 15 }}>
              Refaire le test
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={[styles.body, styles.center]}>
          <View style={{ width: "80%" }}>
            <View>
              <Text style={{ fontWeight: "bold" }}>
                Question {questionIndex + 1}
              </Text>
              <Text>{data[questionIndex].label}</Text>
            </View>
            <View>
              {data[questionIndex].answers.map((elem, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      selectAnswer(elem);
                    }}
                  >
                    <AnswerChoice
                      answer={elem}
                      checked={elem.label === selectedAnswer?.label}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
          <TouchableOpacity
            onPress={() => pressMainButton()}
            style={{
              marginVertical: 50,
              borderRadius: 100,
              backgroundColor: blue,
              paddingHorizontal: 100,
              paddingVertical: 10,
            }}
          >
            <Text style={{ color: "white" }}>Suivant</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  landing: {
    height: "100%",
    width: "100%",
  },
  body: { flex: 1 },
});
