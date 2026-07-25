import { Controller, useForm } from "react-hook-form";
import { Pressable, Text, TextInput, View } from "react-native";
interface ILoginFrom {
  email: string;
  password: string;
}
const Login = () => {
  const { control, handleSubmit } = useForm<ILoginFrom>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data: ILoginFrom) => {
    console.log(data);
  };
  return (
    <View className="flex-1 justify-center bg-white px-6">
      <View className="w-full max-w-sm self-center">
        <Text className="mb-2 text-4xl font-bold text-gray-900">
          Welcome Back
        </Text>

        <Text className="mb-8 text-base text-gray-500">
          Sign in to continue
        </Text>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => {
            return (
              <TextInput
                value={value}
                onChange={onChange}
                className="mb-4 rounded-xl border border-gray-300 bg-gray-50 px-4 py-4"
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            );
          }}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => {
            return (
              <TextInput
                value={value}
                onChange={onChange}
                className="mb-4 rounded-xl border border-gray-300 bg-gray-50 px-4 py-4"
                placeholder="Password"
                keyboardType="number-pad"
                autoCapitalize="none"
              />
            );
          }}
        />

        <Pressable
          onPress={handleSubmit(onSubmit)}
          className="items-center rounded-xl bg-blue-600 py-4 active:bg-blue-700"
        >
          <Text className="text-lg font-semibold text-white">Login</Text>
        </Pressable>

        <View className="mt-8 flex-row justify-center">
          <Text className="text-gray-500">Dont have an account?</Text>

          <Pressable>
            <Text className="ml-1 font-semibold text-blue-600">Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Login;
