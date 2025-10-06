from flask import Flask
from flask_migrate import Migrate
from models import db 
from config import Config
from routes.user_routes import user_bp

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    Migrate(app, db)

    app.register_blueprint(user_bp, url_prefix="/users")

    @app.route('/')
    def index():
        return 'Iara Games API com MVC 🎮'

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)
