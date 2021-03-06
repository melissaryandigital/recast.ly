var VideoPlayer = (props) => {
  var isEmpty = false;
  if (Object.keys(props.video).length === 0) {
    isEmpty = true;
  }
  return (
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${isEmpty ? '' : props.video.id.videoId}`} allowFullScreen></iframe>
      </div>
      <div className="video-player-details">
        <h3>{isEmpty ? '' : props.video.snippet.title}</h3>
        <div>{isEmpty ? '' : props.video.snippet.description}</div>
      </div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;



// class RetiredForagerBee extends ForagerBee {
//   constructor() {
//     super();
//     this.age = 40;
//     this.job = 'gamble';
//     this.canFly = false;
//     this.color = 'grey';
//   }

//   forage() {
//     return 'I am too old, let me play cards instead';
//   }

//   gamble(treasure) {
//     this.treasureChest.push(treasure);
//   }
// };