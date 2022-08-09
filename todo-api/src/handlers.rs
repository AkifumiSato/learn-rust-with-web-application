use axum::{
    extract::{Extension, Path},
    http::StatusCode,
    response::IntoResponse,
    Json,
};
use std::sync::Arc;

use crate::repositories::{CreateTodo, TodoRepository, UpdateTodo};

pub async fn create_todo<T: TodoRepository>(
    Json(payload): Json<CreateTodo>,
    Extension(repository): Extension<Arc<T>>,
) -> impl IntoResponse {
    let todo = repository.create(payload);

    (StatusCode::CREATED, Json(todo))
}

pub async fn find_todo<T: TodoRepository>(
    Path(id): Path<i32>,
    Extension(repository): Extension<Arc<T>>,
) -> Result<impl IntoResponse, StatusCode> {
    todo!();
    // todo `Result<impl IntoResponse, StatusCode>`が推論できないため、コンパイルエラーを通すために暫定でOkを返す
    Ok(StatusCode::OK)
}

pub async fn all_todo<T: TodoRepository>(
    Extension(repository): Extension<Arc<T>>,
) -> impl IntoResponse {
    todo!()
}

pub async fn update_todo<T: TodoRepository>(
    Path(id): Path<i32>,
    Json(payload): Json<UpdateTodo>,
    Extension(repository): Extension<Arc<T>>,
) -> Result<impl IntoResponse, StatusCode> {
    todo!();
    // todo `Result<impl IntoResponse, StatusCode>`が推論できないため、コンパイルエラーを通すために暫定でOkを返す
    Ok(StatusCode::OK)
}

pub async fn delete_todo<T: TodoRepository>(
    Path(id): Path<i32>,
    Extension(repository): Extension<Arc<T>>,
) -> StatusCode {
    todo!()
}
