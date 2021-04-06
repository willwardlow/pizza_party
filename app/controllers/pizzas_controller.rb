class PizzasController < ApplicationController
  before_action :authorize_request, only: [:show, :create, :update, :destroy]
  before_action :set_pizza, only: [:update, :destroy]

  # GET /pizzas
  def index
    @pizzas = Pizza.all
    render json: @pizzas, include: :neighborhood
  end

  # GET /pizzas/1
  def show
    @pizza = Pizza.find(params[:id])
    render json: @pizza, include: [:neighborhood, :user] 
  end

  # POST /pizzas
  def create
    @pizza = Pizza.new(pizza_params)
    @pizza.user = @current_user

    if @pizza.save
      render json: @pizza, include: [:neighborhood, :user], status: :created, location: @pizza
    else
      render json: @pizza.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /pizzas/1
  def update
    if @pizza.update(pizza_params)

      render json: @pizza, include: [:neighborhood, :user], status: :created, location: @pizza
    else 
      render json: @pizza.errors, status: :unprocessable_entity
    end
  end

  # DELETE /pizzas/1
  def destroy
    @pizza.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_pizza
      @pizza = Pizza.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def pizza_params
      params.require(:pizza).permit(:restaurant_name, :description, :pizza_type, :image_url, :neighborhood_id, :user)
    end
end
