class Api::MessagesController < Api::ApplicationController
  def index
    @messages = Message.order('RANDOM()').first
    render json: { message: @messages.message }
  end
end
