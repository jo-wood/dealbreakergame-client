import { Container } from 'unstated';

class WaitingContainer extends Container {
    state = {
      // games always start at 8:00pm day of currently
      nextGameStarts: new Date(Date.now()).setHours(20),
      moveIntoGame: false
    };

    setNextGame() {
      const nextDate = new Date(this.state.nextGameStarts);
      const tomorrow = nextDate.setDate(nextDate.getDate() + 1);

        this.setState({
          nextGameStarts: tomorrow,
          moveIntoGame: true
        })
    }


}

export default WaitingContainer;