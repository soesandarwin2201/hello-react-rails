class Api::MessagesController < Api::ApplicationController
  def index
    @messages = Message.find_by(id: rand(1..Message.count))
    # response.headers['Access-Control-Allow-Origin'] = 'http://127.0.0.1:3000'
    # response.headers['Access-Control-Allow-Methods'] = 'GET'
    # response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    render json: @messages
  end
end
