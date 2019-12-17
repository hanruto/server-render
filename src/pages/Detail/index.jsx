import React from 'react'


export default class ArticleDetail extends React.Component {
  static async getInitialProps() {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    return { userName: 'xiao han', age: 24 }
  }

  render() {
    const { userName, age } = this.props

    return (
      <div>
        <p>detail</p>
        <div>
          <label>name: </label>
          <span>{userName}</span>
        </div>
        <div>
          <label>age: </label>
          <span>{age}</span>
        </div>
      </div>
    )
  }
}
