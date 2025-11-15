import { FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router';
import RegisterForm from '../../components/Shared/Forms/RegisterFrom';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/UseAuth';
import { fileToBase64, registerUsertoDB } from '../../utils/utilities';
import { toast } from 'react-hot-toast';
import { useEffect } from 'react';
import Aos from 'aos';

export default function RegisterUIOnly() {
  useEffect(() => {
    Aos.init({ duration: 900, once: true, easing: 'ease-in-out' });
  }, []);
  const { createUser } = useAuth();
  // Hook From Code
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await toast
      .promise(
        (async () => {
          // 1️⃣ Create user in Firebase
          const result = await createUser(data.userEmail, data.password);
          const uid = result.user.uid;

          // 2️⃣ Convert profile photo to Base64 if exists
          let base64Photo = null;
          if (data.profilePhoto && data.profilePhoto.length > 0) {
            base64Photo = await fileToBase64(data.profilePhoto[0]);
          }

          // 3️⃣ Prepare payload
          const payload = {
            name: data.userName,
            email: data.userEmail,
            uid,
            photo: base64Photo,
            role: data.role,
          };

          // 4️⃣ Send to backend
          const response = await registerUsertoDB(payload);
          return response; // resolved value for success toast
        })(),
        {
          loading: 'Creating user...',
          success: 'User created successfully! 🎉',
          error: 'Failed to create user. ❌',
        }
      )
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div
      data-aos="fade-up"
      className="rounded-xl border border-white/20 shadow-lg m-4 p-6 bg-white/10 backdrop-blur-2xl text-white"
    >
      <div className="flex gap-3">
        <FaUserPlus size={60} />
        <h2 className="text-4xl font-bold mb-8 pt-2">Register</h2>
      </div>

      <RegisterForm
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
      />

      <div className="divider px-20">OR</div>

      {/* Social Login Buttons */}
      <div className="flex justify-between gap-4"></div>

      <p className="text-center text-[#E6EAD0]/80 mt-2">
        Already have an account?
        <Link to="/auth">
          <span className="text-white font-sm link"> Login</span>
        </Link>
      </p>
    </div>
  );
}
