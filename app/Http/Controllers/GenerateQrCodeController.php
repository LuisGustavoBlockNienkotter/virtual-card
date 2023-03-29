<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Str;
use App\Http\Requests\UpsertQrCodeRequest;

class GenerateQrCodeController extends Controller
{
    public function upsertQrCodeImage(UpsertQrCodeRequest $request): array
    {
        User::upsert([
            'name' => $request->name,
            'slug' => Str::of($request->name)->slug('-'),
            'linkedin_url' => $request->linkedinUrl,
            'github_url' => $request->githubUrl,
        ], ['name']);

        return [
            'qr-code-image' => 'image',
        ];
    }
}