class Api::MessagesController < Api::ApplicationController
  def index
    @messages = Message.find_by(id: rand(1..Message.count))
    render json: @messages
  end
end
