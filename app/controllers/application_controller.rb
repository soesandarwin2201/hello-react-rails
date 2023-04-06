class ApplicationController < ActionController::Base
  before_action :set_cors_header

  def set_cors_header
    response.headers['Access-Control-Allow-Origin'] = 'http://127.0.0.1:3000'
  end
end
