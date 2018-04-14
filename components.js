class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    let f1 = 'Frontend';
    let a1 = 'AppDev';
    let v1 = 'Video';
    let b1 = 'Backend';
    let d1 = 'Design';
    let f2 = 'Front';
    let a2 = 'AppDev';
    let v2 = 'Video';
    let b2 = 'Back';
    let d2 = 'Design';
    this.state = {
      people:[
        {
          name:'Prateek Gupta',
          team1:f1,
          team2:f2,
          id:'2017xxpsxxxxp',
          format:'jpg'
        },
        {
          name:'Shivani Mittal',
          team1:a1,
          team2:a2,
          id:'2017xxpsxxxxp',
          format:'jpg'
        },
        {
          name:'Jai Agarwal',
          team1:a1,
          team2:a2,
          id:'2017xxpsxxxxp',
          format:'jpg'
        },
        {
          name:'Arjun Tyagi',
          team1:v1,
          team2:v2,
          id:'2017xxpsxxxxp',
          format:'jpg'
        },
        {
          name:'Vihang Shah',
          team1:d1,
          team2:d2,
          id:'2017xxpsxxxxp',
          format:'jpg'
        },
        {
          name:'Vishal Hans',
          team1:d1,
          team2:d2,
          id:'2017xxpsxxxxp',
          format:'jpg'
        },
        {
          name:'Amey Agarwal',
          team1:d1,
          team2:d2,
          id:'2017xxpsxxxxp',
          format:'png'
        },
        {
          name:'Satwik Bhattamishra',
          team1:b1,
          team2:b2,
          id:'2017xxpsxxxxp',
          format:'jpg'
        },
        {
          name:'Kalpit Munot',
          team1:v1,
          team2:v2,
          id:'2017xxpsxxxxp',
          format:'jpg'
        },
        {
          name:'Kunal Sharma',
          team1:b1,
          team2:b2,
          id:'2017xxpsxxxxp',
          format:'jpg'
        },
        {
          name:'Piyush Ranjan',
          team1:f1,
          team2:f2,
          id:'2017xxpsxxxxp',
          format:'jpg'
        },
        {
          name:'Nitish Kundala',
          team1:a1,
          team2:a2,
          id:'2017xxpsxxxxp',
          format:'jpg'
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
        <PersonContainer key={index} name={person.name} team1={person.team1} team2={person.team2} id={person.id} img={`./images/main/${index+1}.${person.format}`} venue={this.state.venue} time={this.state.time} description={this.state.description}/>
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
        <Team class = 'team2' content={props.team2} />
        <Picture src={props.img} />
        <Name content={props.name} />
        <Team class = 'team1' content={props.team1} />
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
  var state = 0;
  var containers = document.getElementsByClassName('personContainer');
  var pics = document.getElementsByClassName('pic');
  var teams = document.getElementsByClassName('team1');
  var teams2 = document.getElementsByClassName('team2');
  var names = document.getElementsByClassName('name');
  var bars = document.getElementsByClassName('bar');
  
  containers[0].style.opacity = 0;
  document.getElementById("side-wrap").style.display = "none";
  document.getElementById("side-wrap").style.opacity = 0;
  
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

  function fadeToMain() {
    document.getElementById('side-wrap').style.display = "flex";
    $('#home').animate({
      opacity: '0',
    }, 500);
    setTimeout(function(){
      containers[0].style.opacity = 1;
      document.getElementById('side-wrap').style.opacity = 1;
    }, 400);
    state=!state;
  }

  function toggle(e)
  {
    if(state)
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
    if(!state)
    {
      fadeToMain();
    }
  }  

  function scrollToggle(e)
  {
    if(state){
      if(e.deltaY > 0) nextPerson();
  
      else if(e.deltaY < 0) prevPerson();
    }
    if(!state)
    {
      fadeToMain();
    }
  }

  function domscrollToggle(e)
  {
    if(state){
      if(e.detail > 0) nextPerson();

      else if(e.detail < 0) prevPerson();
    }
    if(!state)
    {
      fadeToMain();
    }
  }

  document.getElementsByClassName("click-here")[0].addEventListener("click", function(){
    if(state) return false;

    if(!state)
    {
      fadeToMain();
    }
  });

  document.addEventListener("keyup", toggle);
  document.addEventListener("mousewheel", scrollToggle);
  document.addEventListener("DOMMouseScroll", domscrollToggle);


  var x1, y1;

  //touch
  document.addEventListener("touchstart", function(e){
    if(state){
      x1 = e.changedTouches[0].pageX;
      y1 = e.changedTouches[0].pageY;
    }
  });

  document.addEventListener("touchend", function(e){
    if(state){
      var deltaX = e.changedTouches[0].pageX - x1;
      var deltaY = e.changedTouches[0].pageY - y1;
  
        //left
        if(deltaX < 0) prevPerson();
  
        //right
        else if(deltaY > 0) nextPerson();
    }
  });
});
