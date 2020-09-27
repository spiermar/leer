import React from 'react';
import Button from '@material-ui/core/Button'

const styles = {
  logoContainer: {
    height: 256,
    textAlign: 'center',
  },
  lessonButton: {
    display: 'block',
    margin: 'auto',
    marginBottom: 15,
  },
  buttonContainer: {
    margin: 'auto',
  },
  container: {
    height: 'calc(100vh - 272px)',
    display: 'flex',
    alignItems: 'center',
  }
}

function Home() {
  return (
    <div>
      <div style={styles.logoContainer}>
        <img alt="logo" src="logo.png" height="256px" />
      </div>
      <div style={styles.container}>
        <div style={styles.buttonContainer}>
          <Button style={styles.lessonButton} variant="contained" color="primary">
            Double Digit Sum
          </Button>
          <Button disabled style={styles.lessonButton } variant="contained" color="primary">
            Triple Digit Sum
          </Button>
          <Button disabled style={styles.lessonButton} variant="contained" color="primary">
            Double Digit Sub
          </Button>
          <Button disabled style={styles.lessonButton} variant="contained" color="primary">
            Triple Digit Sub
          </Button>
          <Button disabled style={styles.lessonButton} variant="contained" color="primary">
            Single Digit Multi
          </Button>
          <Button disabled style={styles.lessonButton} variant="contained" color="primary">
            Double Digit Multi
          </Button>
        </div>
      </div>
      
    </div>
  );
}

export default Home;
