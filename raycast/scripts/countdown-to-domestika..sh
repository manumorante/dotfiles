#!/bin/bash

# How to use this script?
#
# It's a template which needs further setup. Duplicate the file, 
# remove `.template.` from the filename and set the date you want.
# Optionally, adjust the raycast.title and raycast.icon according to your needs.
# You may need to install coreutils via homebrew to make this script work (gdate function).
#
# Homebrew: https://brew.sh/
# Coreutils: https://formulae.brew.sh/formula/coreutils

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title Domestika
# @raycast.mode inline

# Conditional parameters:
# @raycast.refreshTime 24h

# Optional parameters:
# @raycast.icon images/domestika.png

# Documentation:
# @raycast.author Valentin Chrétien
# @raycast.authorURL https://github.com/valentinchrt
# @raycast.description See how many days/hours until a specific date.

# Configuration

# 1. Set the date you want by replacing yyyy-mm-dd in TIMESTAMP_EVENT (e.g. 2022-12-31)
# 2. Optionaly, you can set the time by editing T00:00:00+00:00

TIMESTAMP_EVENT=`gdate -d "2019-04-23" +%s`
TIMESTAMP_TODAY=`gdate +%s`

REMAINING=$(($TIMESTAMP_TODAY - $TIMESTAMP_EVENT))

DAYS_REMAINING=$(($REMAINING / 86400))
# MONTH_REMAINING=$(($REMAINING / 86400))
HOURS_REMAINING=$(($REMAINING % 86400 / 3600))

echo "$DAYS_REMAINING dias en Domestika."
