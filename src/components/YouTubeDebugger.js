import React from 'react'
class YouTubeDebugger extends React.Component {
    constructor() {
        super();
    
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
      }

      handleBitrate = () => {
        this.setState({
            settings: {
              ...this.state.settings,
              bitrate: 12
            }
        })
      }

      handleRes = () => {
          this.setState({
              settings: {
                  ...this.state.settings,
                  video: {
                      ...this.state.settings.video,
                      resolution: '720p'
                  }
              }
          })
      }

      render () {
          return (
              <div>
                  <button onClick={this.handleBitrate} className="bitrate">change bitrate</button>
                  <button onClick={this.handleRes} className="resolution">changeres</button>

              </div>
          )
      }
}

export default YouTubeDebugger