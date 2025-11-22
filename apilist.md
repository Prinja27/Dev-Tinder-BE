# DevTinder APIs

authRouter

- POST /signup
- POST /login
- POST /logout

profileRouter

- PATCH /profile/edit
- PATCH /profile/password
- GET /profile/view

connectionRequestRouter

- POST /request/send/intrested/:userId
- POST /request/send/ignored/:userId
- POST /request/review/accepted/:requestId
- POST /request/review/rejected/:requestId

userRouter

- GET /user/connections
- GET /user/requests/received
- GET /user/feed -- gets the profiles of the other users at the platform

STATUS: ignored,intrested,accepted,rejected
