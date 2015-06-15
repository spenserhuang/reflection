class ReflectionsController < ApplicationController

  def index
    reflections = Reflection.where(user_id: params[:user_id])
    p reflections
    list = []
    reflections.each do |reflection|
      list << reflection
    end

    p list

    render json: list
  end

  def show
  end

  def new
  end

  def create

    reflection = Reflection.new (reflection_params)

    if reflection.save!
      p "Reflection Saved"
    else
      p "Failed to Save Reflection"
    end

  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def reflection_params
    params.permit(:reflection_date, :user_id, :productivity_score, :happiness_score, :health_score, :comments )
  end

end
