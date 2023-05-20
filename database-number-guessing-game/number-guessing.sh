#!/bin/bash
PSQL="psql --username=freecodecamp --dbname=number_guess -t --no-align -c"

echo "Enter your username:"
read USERNAME
USERNAME_CHARACTERS=$(echo $USERNAME | wc -c)
GAMES_PLAYED=$($PSQL "SELECT COUNT(*) FROM users INNER JOIN games USING(user_id) WHERE username = '$USERNAME'")
BEST_GAME=$($PSQL "SELECT MIN(guesses) FROM users INNER JOIN games USING(user_id) WHERE username = '$USERNAME'")

if [[ $USERNAME_CHARACTERS -gt 22 ]]
then
    echo -e "\nEnter your username:"
    read USERNAME
fi

RETURNING_USER=$($PSQL "SELECT username FROM users WHERE username = '$USERNAME'")
if [[ -z $RETURNING_USER ]]
then
    INSERTED_USER=$($PSQL "INSERT INTO users (username) VALUES ('$USERNAME')")
    echo "Welcome, $USERNAME! It looks like this is your first time here."
    
else
    echo "Welcome back, $USERNAME! You have played $GAMES_PLAYED games, and your best game took $BEST_GAME guesses."
fi

SECRET_NUMBER=$((1 + $RANDOM % 1000 ))
echo "Guess the secret number between 1 and 1000:"
TRIES=1

while read GUESS
do
    if [[ ! $GUESS =~ ^[0-9]+$ ]]
    then
        echo "That is not an integer, guess again:"
        TRIES=$(expr $TRIES + 1)
        GUESSING_MACHINE
    else
        if [[ $GUESS -eq $SECRET_NUMBER ]]
        then
            break;
        else
            if [[ $GUESS -gt $SECRET_NUMBER ]]
            then
                echo "It's lower than that, guess again:"
            elif [[ $GUESS -lt $SECRET_NUMBER ]]
            then
                echo "It's higher than that, guess again:"
            fi
        fi
    fi
    TRIES=$(expr $TRIES + 1)
done



# insert data from game
USER_ID=$($PSQL "SELECT user_id FROM users WHERE username = '$USERNAME'")
INSERTED_GAME=$($PSQL "INSERT INTO games (user_id, guesses) VALUES ($USER_ID, $TRIES)")
PLURAL_TRIES=$(if [[ $TRIES -eq 1 ]]; then echo "try"; else echo "tries"; fi)
echo "You guessed it in $TRIES tries. The secret number was $SECRET_NUMBER. Nice job!"
