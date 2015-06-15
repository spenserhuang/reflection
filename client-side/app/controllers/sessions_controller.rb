class SessionsController < ApplicationController

  def new
  end

  def create
    session[:user] = params
    redirect_to "/home"
  end

  def destroy
    session[:user] = nil
    redirect_to "/"
  end

end
