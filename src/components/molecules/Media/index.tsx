import * as React from 'react';

interface IPropTypes {
    query?: number;
}

interface IDefaultProps {
	readonly query: number;
}

interface IState {
    viewportWidth: number;
}

const Media: React.ComponentClass<IPropTypes> =
  class extends React.Component<IPropTypes & IDefaultProps, IState> {
    
    public static defaultProps: IDefaultProps = {
        query: 768
    }

    constructor(props: IPropTypes & IDefaultProps) {
        super(props);
        this.state = {
            viewportWidth: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.isMatch = this.isMatch.bind(this);
    }

    componentDidMount() {
        this.handleChange();
        window.addEventListener('resize', this.handleChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleChange);
    }

    handleChange() {
        const viewportWidth = window.innerWidth;
        this.setState({ viewportWidth });
    }

    isMatch() {
        return this.state.viewportWidth >= this.props.query;
    }

    render() {
        return (
            <React.Fragment>
                {this.props.children(this.isMatch())}
            </React.Fragment>
        );
    }


}

export default Media;