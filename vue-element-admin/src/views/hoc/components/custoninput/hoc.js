const HocValidataComFunction = (Component) => ({
  name: `hoc-${Component.name}`,
  props: ['rules'],
  data() {
    return {
      value: '',
      errMsg: ''
    }
    },
    methods:{
      valuedate(value) {
        this.value = value
        const valuedateStatus = this.rules.reduce((pre, cur) => {
          const check = cur && cur.test && cur.test(this.value)
          this.errMsg = check ? '' : cur.message
          return pre && cur
        }, true)
        return valuedateStatus
      }
    },
    render(){
      return (
        <div>
          <Component initvalue={this.value} on-blur={this.valuedate}></Component>
          <div>{this.errMsg || ''}</div>
        </div>
      )
    }

})

export default HocValidataComFunction
