import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/User";
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";
// import { bcrypt } from "bcryptjs";

export async function POST(request: Request) {
  await dbConnect();
}
