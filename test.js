import {injectApi ,injectValue ,injectValueApi } from 'react-inject-restful'

const HaveValue=({value,children})=><pre>{JSON.stringify(value)}{children}</pre>
const HaveData=({data,children})=><pre>{JSON.stringify(data)}{children}</pre>
class HaveApi extends React.Component {
  static propTypes = {
    api: React.PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state={};
  }

  componentDidMount() {
  	const me=this;
  	const {api}=this.props;
  	console.log("this.props")

  	console.log(this.props)
  	api.all().then(data=>{
  		console.log('api.all',data)
  		me.setState(data)
  	})
  }

  render() {
  	const {children}=this.props;
    return (
      <pre>{JSON.stringify(this.state)}{children}</pre>
    );
  }
}
const X=injectApi("/test")(HaveApi)
const Y=injectValue("/test")(HaveValue);
const Z=injectValueApi("/test")(HaveData,{value:"data"});


ReactDOM.render(<div>
	<X>aa</X>
	<Y>bb</Y>
	<Z>cc</Z>
</div>, mountNode);