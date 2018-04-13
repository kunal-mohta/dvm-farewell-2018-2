class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    let f = 'Frontend';
    let a = 'AppD';
    let v = 'Video';
    let b = 'Backend';
    let d = 'Design';
    this.state = {
      people:[
        {
          name:'Prateek Gupta',
          team:f
        },
        {
          name:'Shivani Mittal',
          team:a
        },
        {
          name:'Jai Agarwal',
          team:a
        },
        {
          name:'Arjun Tyagi',
          team:v
        },
        {
          name:'Vihang Shah',
          team:d
        },
        {
          name:'Vishal Hans',
          team:d
        },
        {
          name:'Amey Agarwal',
          team:d
        },
        {
          name:'Satwik Bhattamishra',
          team:b
        },
        {
          name:'Kalpit Munot',
          team:v
        },
        {
          name:'Kunal Sharma',
          team:b
        },
        {
          name:'Piyush Ranjan',
          team:f
        },
        {
          name:'Nitish Kundala',
          team:a
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
        <PersonContainer key={index} name={person.name} team={person.team} img={`./images/main/${index+1}.jpg`} venue={this.state.venue} time={this.state.time} description={this.state.description}/>
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
        <Team content={props.team} />
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
      <div className = 'team'>{props.content}</div>
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
var containers = document.getElementsByClassName('personContainer');
var pics = document.getElementsByClassName('pic');
var teams = document.getElementsByClassName('team');

var container = document.getElementsByClassName('personContainer')[0];
var pic = document.getElementsByClassName('pic')[0];
var team = document.getElementsByClassName('team')[0];

pic.style.height = (container.clientHeight < container.clientWidth ? container.clientHeight : container.clientWidth)*0.7 + "px";

team.style.top = (container.clientHeight + pic.clientHeight)/2 + "px";
team.style.transform = "translateY(-50%)";

for(var i=0; i<pics.length; i++)
{
  pics[i].style.height = pics[0].style.height;
}
for(var i=0; i<teams.length; i++)
{
  teams[i].style.top  = teams[0].style.top;
  teams[i].style.transform = teams[0].style.transform;
}
document.addEventListener("keyup", toggle);

var active = 0;

function toggle(e)
{
  var length = containers.length;
  if(e.keyCode == 39)
  {
    pics[active].style.width = "0px";
  }
}