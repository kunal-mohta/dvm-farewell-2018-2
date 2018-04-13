class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    let f = 'Front-End Team';
    let a = 'AppD Team';
    let v = 'Video Team';
    let b = 'Back-End Team';
    let d = 'Design Team';
    this.state = {
      people:[
        {
          name:'Prateek Gupta',
          team:f,
          id:'20xxxxxxx'
        },
        {
          name:'Shivani Mittal',
          team:a,
          id:'20xxxxxxx'
        },
        {
          name:'Jai Agarwal',
          team:a,
          id:'20xxxxxxx'
        },
        {
          name:'Arjun Tyagi',
          team:v,
          id:'20xxxxxxx'
        },
        {
          name:'Vihang Shah',
          team:d,
          id:'20xxxxxxx'
        },
        {
          name:'Vishal Hans',
          team:d,
          id:'20xxxxxxx'
        },
        {
          name:'Amey Agarwal',
          team:d,
          id:'20xxxxxxx'
        },
        {
          name:'Satwik Bhattamishra',
          team:b,
          id:'20xxxxxxx'
        },
        {
          name:'Kalpit Munot',
          team:v,
          id:'20xxxxxxx'
        },
        {
          name:'Kunal Sharma',
          team:b,
          id:'20xxxxxxx'
        },
        {
          name:'Piyush Ranjan',
          team:f,
          id:'20xxxxxxx'
        },
        {
          name:'Nitish Kundala',
          team:a,
          id:'20xxxxxxx'
        }
      ],
      venue:'Kamal',
      time:'8:00',
      description:'blah blah'
    }
  }

  render() {
    let people = this.state.people;
    return (
      people.map((person, index) => 
        <PersonContainer key={index} name={person.name} team={person.team} id={person.id} img={`./images/main/${index+1}.jpg`} venue={this.state.venue} time={this.state.time} description={this.state.description}/>
      )
    );
  }
}

class PersonContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let props = this.props;
    return (
      <div className = 'personContainer'>
        <Picture src={props.img} />
        <Name content={props.name} />
        <Team class = 'team1' content={props.team} />
        <Team class = 'team2' content={props.team} />
        <Id content={props.id} />
        <Description content={props.description}/>
        <Venue venue={props.venue} time={props.time} />
      </div>
    );
  }
}

class Picture extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;
    return (
      <img className = 'pic' src={props.src} />
    );
  }
}

class Name extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let props = this.props;    
    return (
      <div className = 'name'>{props.content}</div>
    );
  }
}

class Team extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let props = this.props;
    return (
      <div className={props.class}>{props.content}</div>
    );
  }
}

class Id extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let props = this.props;
    return (
      <div className = 'idno'>{props.content}</div>
    );
  }
}

class Description extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let props = this.props;
    return (
      <div className = 'description'>{props.content}</div>
    );
  }
}

class Venue extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let props = this.props;
    return (
      <div className = 'venue'>{props.venue} {props.time}</div>
    );
  }
}


ReactDOM.render(
  <Wrapper />,
  document.getElementById('wrapper')
)