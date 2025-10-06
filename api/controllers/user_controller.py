from flask import request, jsonify
from werkzeug.security import generate_password_hash
from models import db, User

def create_user():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')

    if not all([name, email, password]):
        return jsonify({'error': 'Todos os campos são obrigatórios.'}), 400

    if User.query.filter_by(email=email).first():
        return jsonify({'error': 'E-mail já cadastrado.'}), 409

    hashed_password = generate_password_hash(password)
    user = User(name=name, email=email, password_hash=hashed_password)

    db.session.add(user)
    db.session.commit()

    return jsonify({'message': 'Usuário cadastrado com sucesso!'}), 201
