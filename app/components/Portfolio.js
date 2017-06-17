const React = require('react');
const Header = require('./Header');
const Preview = require('./Preview');

class Portfolio extends React.Component {
  render() {
    return (
      <section id='portfolio'>
      <div className='page porfolio'>
        <Header header='Portfolio'/>
        <div className='previews'>
          <Preview
          link='simon-game'
          name='Simon Game'  
          alt='Simon Game' 
          image='simon_game'>
          </Preview>
          <Preview
          link='tic-tac-toe-game' 
          name='Tic Tac Toe Game'
          alt='Tic Tac Toe Game'  
          image='tic_tac_toe_game'>
          </Preview>
          <Preview
          link='pomodoro-clock' 
          name='Pomodoro Clock'
          alt='Pomodoro Clock' 
          image='pomodoro_clock'>
          </Preview>
          <Preview 
          link='javascript-calculator'
          name='JavaScript Calculator'
          alt='JavaScript Calculator'  
          image='javascript_calculator'>
          </Preview>
          <Preview 
          link='wikipedia-viewer'
          name='Wikipedia Viewer'
          alt='Wikipedia Viewer' 
          image='wikipedia_viewer'>
          </Preview>
          <Preview 
          link='local-weather'
          name='Local Weather'
          alt='Local Weather' 
          image='local_weather'>
          </Preview>
          <Preview 
          link='random-quote-machine'
          name='Random Quote Machine' 
          alt='Random Quote Machine'
          image='random_quote_machine'>
          </Preview>
          <Preview 
          link='tribute-page'
          name='Tribute Page'
          alt='Tribute Page' 
          image='tribute_page'>
          </Preview>
        </div>
      </div>
      </section>
    )
  }
}

module.exports = Portfolio;
