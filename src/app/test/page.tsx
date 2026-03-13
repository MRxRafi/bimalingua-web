"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { testQuestions, calculateLevel, getLevelDescription, TestResult } from '@/lib/test-data';
import { sendToHubSpot } from '@/lib/hubspot-mock';
import styles from './test.module.css';

export default function TestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(testQuestions.length).fill(null)
  );
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const progress = ((currentQuestion + 1) / testQuestions.length) * 100;
  const question = testQuestions[currentQuestion];

  const handleSelectAnswer = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < testQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateAndShowResults();
    }
  };

  const calculateAndShowResults = () => {
    setShowResults(true);
  };

  const getScore = (): number => {
    return answers.reduce<number>((score, answer, index) => {
      return score + (answer !== null && answer === testQuestions[index].correctAnswer ? 1 : 0);
    }, 0);
  };

  const handleSubmitEmail = async () => {
    if (!email || !email.includes('@')) return;

    setIsSubmitting(true);

    const result: TestResult = {
      score: getScore(),
      level: calculateLevel(getScore()),
      timestamp: new Date().toISOString(),
      email: email,
      source: 'Test de nivel Bimalingua'
    };

    await sendToHubSpot(result);
    setEmailSent(true);
    setIsSubmitting(false);
  };

  const handleSkipEmail = async () => {
    const result: TestResult = {
      score: getScore(),
      level: calculateLevel(getScore()),
      timestamp: new Date().toISOString(),
      source: 'Test de nivel Bimalingua'
    };

    await sendToHubSpot(result);
    setShowResults(true);
  };

  if (showResults) {
    const score: number = getScore();
    const level: string = calculateLevel(score);
    return (
      <div className={styles.testPage}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className={styles.backLink}>
              ← Volver al inicio
            </Link>

            <div className={`${styles.resultsCard} glass`}>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className={styles.levelBadge}>{level}</div>
              </motion.div>

              <h2 className={styles.levelTitle}>Tu nivel de inglés</h2>
              <p className={styles.levelDescription}>{getLevelDescription(level)}</p>
              <p className={styles.scoreText}>
                Has acertado {score} de {testQuestions.length} preguntas
              </p>

              <div className={styles.emailForm}>
                {!emailSent ? (
                  <>
                    <p>Déjanos tu email para enviarte información personalizada sobre tu nivel.</p>
                    <input
                      type="email"
                      placeholder="tu@email.com"
                      className={styles.emailInput}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className={styles.formButtons}>
                      <button
                        className="btn btn-primary"
                        onClick={handleSubmitEmail}
                        disabled={isSubmitting || !email}
                      >
                        {isSubmitting ? 'Enviando...' : 'Recibir resultados'}
                      </button>
                      <button className={styles.skipButton} onClick={handleSkipEmail}>
                        Omitir
                      </button>
                    </div>
                  </>
                ) : (
                  <motion.p
                    className={styles.successMessage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    ✓ Resultados enviados correctamente
                  </motion.p>
                )}
              </div>

              <Link href="#contacto" className={styles.ctaButton}>
                Reserva tu clase gratuita
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.testPage}>
      <div className={styles.container}>
        <div className={styles.testHeader}>
          <h1>Test de Nivel de Inglés</h1>
          <p>Descubre tu nivel actual de inglés</p>
        </div>

        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className={`${styles.questionCard} glass`}
        >
          <div className={styles.progressContainer}>
            <div className={styles.progressInfo}>
              <span>Pregunta {currentQuestion + 1} de {testQuestions.length}</span>
              <span>{question.type === 'grammar' ? 'Gramática' : 'Vocabulario'}</span>
            </div>
            <div className={styles.progressBar}>
              <motion.div
                className={styles.progressFill}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <span className={styles.questionNumber}>{question.level}</span>
          <h2 className={styles.questionText}>{question.question}</h2>

          <div className={styles.optionsList}>
            {question.options.map((option, index) => (
              <motion.button
                key={index}
                className={`${styles.optionButton} ${answers[currentQuestion] === index ? styles.selected : ''}`}
                onClick={() => handleSelectAnswer(index)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {option}
              </motion.button>
            ))}
          </div>

          <div className={styles.navigationButtons}>
            <button
              className={styles.nextButton}
              onClick={handleNext}
              disabled={answers[currentQuestion] === null}
            >
              {currentQuestion < testQuestions.length - 1 ? 'Siguiente' : 'Ver resultados'}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}