class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    let f = 'Front';
    let a = 'AppDev';
    let v = 'Video';
    let b = 'Back';
    let d = 'Design';
    this.state = {
      people:[
        {
          name:'Prateek Gupta',
          team:f,
          id:'2017xxpsxxxxp'
        },
        {
          name:'Shivani Mittal',
          team:a,
          id:'2017xxpsxxxxp'
        },
        {
          name:'Jai Agarwal',
          team:a,
          id:'2017xxpsxxxxp'
        },
        {
          name:'Arjun Tyagi',
          team:v,
          id:'2017xxpsxxxxp'
        },
        {
          name:'Vihang Shah',
          team:d,
          id:'2017xxpsxxxxp'
        },
        {
          name:'Vishal Hans',
          team:d,
          id:'2017xxpsxxxxp'
        },
        {
          name:'Amey Agarwal',
          team:d,
          id:'2017xxpsxxxxp'
        },
        {
          name:'Satwik Bhattamishra',
          team:b,
          id:'2017xxpsxxxxp'
        },
        {
          name:'Kalpit Munot',
          team:v,
          id:'2017xxpsxxxxp'
        },
        {
          name:'Kunal Sharma',
          team:b,
          id:'2017xxpsxxxxp'
        },
        {
          name:'Piyush Ranjan',
          team:f,
          id:'2017xxpsxxxxp'
        },
        {
          name:'Nitish Kundala',
          team:a,
          id:'2017xxpsxxxxp'
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
  document.getElementById('main-wrap')
)

$(document).ready(function(){
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

  var barLength, teamTop;
  if(screen.width <= 600) {
    barLength = "85%";
    teamTop = "91%";
  }
  else {
    barLength = "65%";
    teamTop = (container.clientHeight + pic.clientHeight)/2 + "px";
  }

  team1.style.top = teamTop;
  team1.style.transform = "translateY(-50%)";
  
  for(var i=0; i<containers.length; i++)
  {
    document.getElementById("side-wrap").innerHTML+='<div class="side-bar"></div>';
  }

  var sideBars = document.getElementsByClassName("side-bar");

  sideBars[0].style.width = '100%';

  for(var i=1; i<pics.length; i++)
  {
    containers[i].style.display = 'none';
    pics[i].style.height = pics[0].style.height;
    teams[i].style.top  = teams[0].style.top;
    teams[i].style.transform = teams[0].style.transform;
    pics[i].style.opacity = 0;
    // teams[i].style.opacity = 0;
    teams[i].style.top = "110%";
    teams[i].style.transform = "translateY(-50%)";
    // teams[i].style.width = 0;
    teams2[i].style.opacity = 0;
    names[i].style.width = 0;
    names[i].style.opacity = 0;
    bars[i].style.width = 0;
  }

  var active = 0;
  var next, prev;

  var length = containers.length;

  var isAnimationRunning = 0;

  function nextPerson()
  {
    if(isAnimationRunning) return false;

    else{
      isAnimationRunning = 1;

      if(active==containers.length-1)
        next = 0;
      else
        next=active+1;
      containers[next].style.display = 'flex';
      pics[active].style.opacity = "0";
      setTimeout(function(){pics[next].style.opacity = 1;}, 300);
      bars[active].style.width = "0px";
      setTimeout(function(){bars[next].style.width = barLength;}, 750);

      sideBars[active].style.width = "7%";
      setTimeout(function(){sideBars[next].style.width='100%';}, 500);  

      $('.team1:eq('+active+')').animate({
        top: "110%"
      });
      $('.team2:eq('+active+')').animate({
        opacity: '0',
      }, 500);
      setTimeout(function(){
        $('.team2:eq('+(next)+')').animate({
          opacity: '0.3',
        }, 600);
      }, 450);
      $('.name:eq('+active+')').animate({
        width: '0',
        opacity: '0',
      }, 1000);
      setTimeout(function(){
        $('.name:eq('+(next)+')').animate({
          width: '200px',
          opacity: '1',
        });
      }, 1100);
      setTimeout(function(){
        $('.team1:eq('+(next)+')').animate({
          top: teamTop
        });
      }, 600);
      setTimeout(function(){active=next; isAnimationRunning = 0;}, 1300);
      }
  }
  
  function prevPerson()
  {
    if(isAnimationRunning) 
      return false;
    else {
      isAnimationRunning = 1;
      if(active==0)
        prev = containers.length-1;
      else
        prev=active-1;
      containers[prev].style.display = 'flex';
      pics[active].style.opacity = "0";
      setTimeout(function(){pics[prev].style.opacity = 1;}, 300);
      bars[active].style.width = "0px";
      setTimeout(function(){bars[prev].style.width = barLength;}, 750);

      sideBars[active].style.width = "7%";
      setTimeout(function(){sideBars[prev].style.width='100%';}, 500);  

      $('.team1:eq('+active+')').animate({
        top: "110%"
      });
      $('.team2:eq('+active+')').animate({
        opacity: '0',
      }, 500);
      setTimeout(function(){
        $('.team2:eq('+(prev)+')').animate({
          opacity: '0.3',
        }, 600);
      }, 450);
      $('.name:eq('+active+')').animate({
        width: '0',
        opacity: '0',
      }, 1000);
      setTimeout(function(){
        $('.name:eq('+(prev)+')').animate({
          width: '200px',
          opacity: '1',
        });
      }, 1100);
      setTimeout(function(){
        $('.team1:eq('+(prev)+')').animate({
          top: teamTop
        });
      }, 600);
      setTimeout(function(){active=prev; isAnimationRunning = 0;}, 1300);
    }
  }

  function toggle(e)
  {
    if(e.keyCode == 39)
    {
      nextPerson();
    }
    
    if(e.keyCode == 37)
    {
      prevPerson();
    }
  }  

  function scrollToggle(e)
  {
    if(e.deltaY > 0) nextPerson();
  
    else if(e.deltaY < 0) prevPerson();
  }

  function domscrollToggle(e)
  {
    if(e.detail > 0) nextPerson();

    else if(e.detail < 0) prevPerson();
  }

  document.addEventListener("keyup", toggle);
  document.addEventListener("mousewheel", scrollToggle);
  document.addEventListener("DOMMouseScroll", domscrollToggle);


  var x1, y1;

  //touch
  document.addEventListener("touchstart", function(e){
    x1 = e.changedTouches[0].pageX;
    y1 = e.changedTouches[0].pageY;
  });

  document.addEventListener("touchend", function(e){
    var deltaX = e.changedTouches[0].pageX - x1;
    var deltaY = e.changedTouches[0].pageY - y1;

      //left
      if(deltaX < 0) nextPerson();

      //right
      else if(deltaY > 0) prevPerson();
  });
});
