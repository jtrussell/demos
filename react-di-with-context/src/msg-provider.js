
import React, { Component } from 'react'

const lazyPropTypeCheck = () => null

class MsgProvider extends Component {
  constructor (props, context) {
    super(props, context)
    // Inherit context values set above us. Context should generally be used as
    // a mechanism for injecting immutable dependencies. Things that won't be
    // expected to change before the next page load due to incompatibilities
    // with `shouldComponentUpdate`. It is possible to work around this issue,
    // generally by adding explicit pub/sub for change notifications and forcing
    // updates when they occur.
    //
    // I tend to be more interested in not re-building/fetching/etc. a
    // dependency that was expensive to find. You may prefer to go the other
    // direction and allow nested providers to override their ancestors.
    this.msg = context.msg || props.msg
  }

  getChildContext () {
    return {
      msg: this.msg
    }
  }

  render () {
    return <div>{this.props.children}</div>
  }
}

// Required so we descendents can get context values from us
MsgProvider.childContextTypes = {
  msg: lazyPropTypeCheck
}

MsgProvider.contextTypes = {
  msg: lazyPropTypeCheck
}

const withMsg = (Cmp) => {
  class ThingWithMsg extends Component {
    render () {
      // Note the ordering allows for things on this.props to override the
      // context provided msg.
      //
      // This is also the part of the movie where folks generally insert a
      // warning about the benefits of composition in higher order components as
      // opposed to working directly with the passed component. I'd say that's
      // right 97% of the time.
      return <Cmp msg={this.context.msg} {...this.props} />
    }
  }

  ThingWithMsg.contextTypes = {
    msg: lazyPropTypeCheck
  }

  return ThingWithMsg
}

export { withMsg }
export default MsgProvider
