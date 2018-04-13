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
        <div className="bar"></div>
        <Team class = 'team2' content={props.team} />
        <Picture src={props.img} />
        <Name content={props.name} />
        <Team class = 'team1' content={props.team} />
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
    let name = props.content.split(' ');
    return (
      <div className = 'name'><span className = 'firstname'>{name[0]}</span><br/><span className = 'lastname'>{name[1]}</span></div>
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
var containers = document.getElementsByClassName('personContainer');
var pics = document.getElementsByClassName('pic');
var teams = document.getElementsByClassName('team1');
var teams2 = document.getElementsByClassName('team2');
var names = document.getElementsByClassName('name');
var bars = document.getElementsByClassName('bar');

var container = document.getElementsByClassName('personContainer')[0];
var pic = document.getElementsByClassName('pic')[0];
var team1 = document.getElementsByClassName('team1')[0];

pic.style.height = (container.clientHeight < container.clientWidth ? container.clientHeight : container.clientWidth)*0.7 + "px";

team1.style.top = (container.clientHeight + pic.clientHeight)/2 + "px";
team1.style.transform = "translateY(-50%)";

for(var i=1; i<pics.length; i++)
{
  pics[i].style.height = pics[0].style.height;
  teams[i].style.top  = teams[0].style.top;
  teams[i].style.transform = teams[0].style.transform;
  pics[i].style.opacity = 0;
  teams[i].style.opacity = 0;
  teams2[i].style.opacity = 0;
  names[i].style.opacity = 0;
  bars[i].style.width = 0;
}

document.addEventListener("keyup", toggle);

var active = 0;

function toggle(e)
{
  var length = containers.length;
  if(e.keyCode == 39)
  {
    pics[active].style.opacity = 0;
    setTimeout(function(){pics[active+1].style.opacity = 1;}, 1100);
    bars[active].style.width = 0;
    setTimeout(function(){bars[++active].style.width = "60%";}, 1200);
    // teams[active].style.top = ;
  }
}
