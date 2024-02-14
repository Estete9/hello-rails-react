class Api::V1::GreetingsController < ApplicationController
  def random_greeting
    @greetings = Greeting.all
    random_number = rand(@greetings.size)
    @random_greeting = @greetings[random_number]
    render json: @random_greeting
  end

  def index
    @greetings = Greeting.all
    render json: @greetings
  end

  def new
    @greeting = Greeting.new
  end

  def create
    @greeting = Greeting.new(greeting_params)
  end

  def greeting_params
    params.require(:greeting).permit(:greeting)
  end
end
