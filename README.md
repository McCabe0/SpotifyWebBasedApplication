# CV Builder + Job Matcher

Monorepo skeleton for an app that:
- collects a user's skills and experience
- uses AI to generate a CV
- searches jobs from external sources
- scores job matches against the user's profile

## Structure

```text
frontend/   React + TypeScript + Vite
backend/    Kotlin + Spring Boot
```

## Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend currently includes:
- basic routing-ready React setup
- profile form placeholder
- CV preview placeholder
- jobs panel placeholder
- API client helper

## Backend

```bash
cd backend
./gradlew bootRun
```

The backend currently includes:
- Spring Boot app bootstrap
- health endpoint
- CV generation stub endpoint
- job search stub endpoint
- matching stub endpoint
- DTOs for the first API contract

## Next steps

1. Add PostgreSQL and Flyway
2. Add auth and user profiles
3. Integrate OpenAI for CV generation
4. Integrate job sources
5. Add job scoring and persistence
