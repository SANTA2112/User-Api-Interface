#!/bin/zsh

printf "Please enter component name: > "
read component_name

if [[ -z $component_name ]]; then echo You don\'t typed anything && exit
fi

mkdir ./src/$component_name

cat << _EOF_ > ./src/$component_name/${component_name}.js
import React from 'react';

const $component_name = () => {
  return (
    <div>${component_name}</div>
  )
}

export default $component_name
_EOF_

cat << _EOF_ > ./src/$component_name/index.js
import $component_name from './$component_name';

export default $component_name
_EOF_

cat << _EOF_ > ./src/$component_name/styled.js
import styled from 'styled-components'
_EOF_

