<?php

function responseJson( $data,$status = 200, )
{
    return response()->json($data,$status);
}