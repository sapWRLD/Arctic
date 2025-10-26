from flask import Blueprint, render_template, redirect, url_for, flash
from .models import Post
from .form import PostForm
from . import db

main = Blueprint('main', __name__)

@main.route('/')
def index():
    posts = Post.query.order_by(Post.date_created.desc()).all()
    return render_template('index.html', posts=posts)

@main.route('/post/<int:post_id>')
def post(post_id):
    post_item = Post.query.get_or_404(post_id)
    return render_template('post.html', post=post_item)

@main.route('/about')
def about():
    return render_template('about.html')

@main.route('/create', methods=['GET', 'POST'])
def create_post():
    form = PostForm()
    if form.validate_on_submit():
        new_post = Post(title=form.title.data, content=form.content.data)
        db.session.add(new_post)
        db.session.commit()
        flash('Post created successfully!', 'success')
        return redirect(url_for('main.index'))
    return render_template('create_post.html', form=form)
